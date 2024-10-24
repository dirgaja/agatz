import TyGemini from "../../types/ai/TyGemini";
import validate_gemini from "../../zod/ai/validate_gemini";

async function gemini(message: string):Promise<TyGemini> {
  const result:TyGemini = (await global.axios.get(global.main_url + "gemini?message=" + message)).data;
  return validate_gemini(result);
}

export default gemini;
