type ResultCardProps = {
  title: string;
  percentage: number;
  amount: number;
  description: string;
};

function getCardColor(percentage: number): string {
  if (percentage === 50) {
    return "from-blue-500/20 to-blue-600/10 text-blue-200 border-blue-400/20";
  }

  if (percentage === 20) {
    return "from-cyan-500/20 to-cyan-600/10 text-cyan-200 border-cyan-400/20";
  }

  return "from-emerald-500/20 to-emerald-600/10 text-emerald-200 border-emerald-400/20";
}

export function ResultCard({
  title,
  percentage,
  amount,
  description,
}: ResultCardProps): string {
  const colorClasses = getCardColor(percentage);

  return `
    <article class="rounded-3xl border bg-gradient-to-br ${colorClasses} p-5 shadow-lg shadow-black/20">
      <div class="mb-4 flex items-center justify-between gap-4">
        <h3 class="text-lg font-semibold text-white">${title}</h3>

        <span class="rounded-full bg-white/10 px-3 py-1 text-sm font-bold">
          ${percentage}%
        </span>
      </div>

      <p class="mb-2 text-3xl font-bold text-white">
        ${amount.toFixed(2)}€
      </p>

      <p class="text-sm leading-6 text-slate-300">
        ${description}
      </p>
    </article>
  `;
}
