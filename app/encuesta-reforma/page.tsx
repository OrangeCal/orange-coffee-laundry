import { redirect } from "next/navigation";

const SURVEY_URL = "https://forms.gle/kqYYuXSoy7AgmY3w6";

export default function EncuestaReformaPage() {
  redirect(SURVEY_URL);
}
