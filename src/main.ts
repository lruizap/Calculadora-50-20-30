import "./style.css";
import { App } from "./components/App";
import { ResultCard } from "./components/ResultCard";

type BudgetCategoryResponse = {
  title: string;
  percentage: number;
  amount: number;
  description: string;
};

type BudgetCalculationResponse = {
  salary: number;
  categories: BudgetCategoryResponse[];
};

const root = document.querySelector<HTMLDivElement>("#app");

if (!root) {
  throw new Error("No se encontró el elemento #app");
}

root.innerHTML = App();

function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (!element) {
    throw new Error(`No se encontró el elemento ${selector}`);
  }

  return element;
}

const salaryInput = getElement<HTMLInputElement>("#salary");
const calculateButton = getElement<HTMLButtonElement>("#calculate-button");
const resultsSection = getElement<HTMLElement>("#results");
const formError = getElement<HTMLParagraphElement>("#form-error");

function showError(message: string): void {
  formError.textContent = message;
  formError.classList.remove("hidden");
}

function hideError(): void {
  formError.classList.add("hidden");
}

function renderResults(categories: BudgetCategoryResponse[]): void {
  resultsSection.innerHTML = categories
    .map((category) =>
      ResultCard({
        title: category.title,
        percentage: category.percentage,
        amount: category.amount,
        description: category.description,
      }),
    )
    .join("");
}

async function calculateBudget(): Promise<void> {
  const salary = Number(salaryInput.value);

  if (!salary || salary <= 0) {
    showError("Introduce un sueldo válido mayor que 0.");
    return;
  }

  try {
    hideError();

    calculateButton.disabled = true;
    calculateButton.textContent = "Calculando...";

    const response = await fetch("/api/budget/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ salary }),
    });

    if (!response.ok) {
      throw new Error("No se pudo calcular el presupuesto.");
    }

    const data: BudgetCalculationResponse = await response.json();

    renderResults(data.categories);
  } catch (error) {
    showError("Ha ocurrido un error al conectar con el backend.");
    console.error(error);
  } finally {
    calculateButton.disabled = false;
    calculateButton.textContent = "Calcular";
  }
}

calculateButton.addEventListener("click", () => {
  calculateBudget();
});

salaryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculateBudget();
  }
});
