import { Button } from "react-bootstrap";

const Step3 = ({ dataFilled, setStep }) => {
  const onBack = () => {
    setStep(1);
  };

  return (
    <div className="text-center">
      <h1>
        <em>¡Felicidades!</em>
      </h1>
      <p>Has completado el proceso de donación.</p>
      <p>A continuación, se muestran los detalles de tu donación:</p>
      <p>Nombre: {dataFilled.nombre}</p>
      <p>Apellidos: {dataFilled.apellidos}</p>
      <p>Email: {dataFilled.email}</p>
      <p>
        <b>Número para la rifa: {dataFilled.numberSelected}</b>
      </p>
      <p>
        Recuerda que tu donación contribuirá a una buena causa. ¡Gracias por tu
        apoyo!
      </p>
      <Button onClick={onBack} variant="primary">
        Volver
      </Button>
    </div>
  );
};
export default Step3;
