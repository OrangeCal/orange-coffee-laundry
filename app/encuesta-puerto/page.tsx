import { redirect } from "next/navigation";

const SURVEY_URL = "https://forms.gle/MYsiCRKzGsyxcW8V9";

export default function EncuestaPuertoPage() {
  redirect(SURVEY_URL);
}
