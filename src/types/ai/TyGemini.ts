import TyAgatHeader from "../partials/TyAgatHeader";

type TyGemini = TyAgatHeader & {
  data: {
    success: boolean;
    answer: string;
  }
}

export default TyGemini;
