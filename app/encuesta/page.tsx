import { redirect } from "next/navigation";

const SURVEY_URL = "https://forms.gle/4iTukzajY8vhEn3E7";

export default function EncuestaPage() {
  redirect(SURVEY_URL);
}
