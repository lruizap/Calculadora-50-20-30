import { Header } from "./Header";
import { SalaryForm } from "./SalaryForm";
import { ResultCard } from "./ResultCard";
import type { BudgetCategory } from "../types/budget";

const budgetCategories: BudgetCategory[] = [
  {
    title: "Necesidades",
    percentage: 50,
    description: "Alquiler, comida, transporte, facturas y gastos básicos.",
  },
  {
    title: "Ahorro e inversión",
    percentage: 20,
    description:
      "Fondo de emergencia, fondos indexados, oro, BTC u otros objetivos.",
  },
  {
    title: "Ocio",
    percentage: 30,
    description: "Salir, ropa, suscripciones, viajes, hobbies y caprichos.",
  },
];

export function App(): string {
  const initialSalary = 0;

  return `
    <main class="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 text-white">
      <div class="pointer-events-none absolute inset-0">
        <div class="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div class="absolute right-[-120px] top-40 h-[360px] w-[360px] rounded-full bg-cyan-400/25 blur-3xl"></div>
        <div class="absolute bottom-[-140px] left-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-400/20 blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-5xl">
        <section class="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
          ${Header()}

          ${SalaryForm()}

          <section id="results" class="grid gap-4 md:grid-cols-3">
            ${budgetCategories
              .map((category) =>
                ResultCard({
                  title: category.title,
                  percentage: category.percentage,
                  amount: initialSalary,
                  description: category.description,
                }),
              )
              .join("")}
          </section>
        </section>
      </div>
    </main>
  `;
}

export { budgetCategories };
