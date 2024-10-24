import TyGemini from "../../types/ai/TyGemini";

const geminiSchema = global.zod.object({
  success: global.zod.boolean(),
  answer: global.zod.string()
});

function validate_gemini(data: TyGemini):TyGemini {
  geminiSchema.parse(data.data);
  return data;
}

export default validate_gemini;
