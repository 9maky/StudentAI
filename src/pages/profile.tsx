import { NextPage } from "next";

interface Props {
  userAgent?: string;
  ctx?: any;
}

const Postavke: NextPage<Props> = () => {
  return (
    <>
      <div>
        <span>Artimetička sredina</span>
        <div></div>
        <span>Sopstvena</span>
        <div></div>
        <span>Prosječna</span>
      </div>
      <div></div>
    </>
  );
};
export default Postavke;
