import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';


function FilterRD({getQueryRD}: any) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues: { [key: string]: FormDataEntryValue | { [key: string]: FormDataEntryValue } } = {};
    for (let [key, value] of formData.entries()) {
      if (key !== "active_date_final" && key !== "active_date_inicial") {
        formValues[key] = value;
      } else {
        // Asegúrate de que 'active_date' sea un objeto antes de usar la sintaxis de propagación
        formValues['active_date'] = formValues['active_date'] as {} || {}; // Inicializa 'active_date' como un objeto si aún no lo es
        formValues['active_date'] = {...formValues['active_date'], [key]: value};
      }
    }
    getQueryRD(formValues)
  };

  return (
    <Form onChange={handleSubmit}>
      <Form.Group className="mb-3" as={Col}>
        <Form.Label>Número de Resolución</Form.Label>
        <Form.Control
          type="text"
          placeholder="0001-2020-MTC"
          name="document_name"
        />
      </Form.Group>
      <Form.Group className="mb-3" as={Col}>
        <Form.Label>Estado resolutivo</Form.Label>
        <Form.Select name='subcategory_id'>
          <option value={""}>Seleccionar</option>
          <option value={"aprobado"}>Aprobado</option>
          <option value={"desaprobado"}>Desaprobado</option>
          <option value={"improcedente"}>Improcedente</option>
          <option value={"Abandonado"}>Abandonado</option>
          <option value={"Desistido"}>Desistido</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" as={Col}>
        <Form.Label>Empresa Operadora</Form.Label>
        <Form.Control name='administrado' type="text" placeholder="Razón Social" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Label>Fecha de publicación</Form.Label>
        <Form.Group as={Col} md="6">
          <Form.Label>Inicio</Form.Label>
          <Form.Control
            required
            type="date"
            defaultValue="2019-01-01"
            name='active_date_inicial'
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Final</Form.Label>
          <Form.Control
            required
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            name='active_date_final'
          />
        </Form.Group>
      </Row>
      {/* <Button type="submit">Buscar</Button> */}
    </Form>
  );
}

export default FilterRD;
