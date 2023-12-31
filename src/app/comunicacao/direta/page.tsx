import Avo from '../../components/comunicacao/direta/Avo';

export default function PageStright() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-5xl mb-10">Comunicação Direta</h1>
      <Avo nome="Pierre" sobrenome="Alexander" />
      <Avo nome="Scobar" sobrenome="Landrino" />
    </div>
  );
}
