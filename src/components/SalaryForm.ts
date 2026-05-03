export function SalaryForm(): string {
  return `
    <section class="mb-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
      <label for="salary" class="mb-2 block text-sm font-medium text-slate-200">
        Sueldo mensual neto
      </label>

      <div class="flex flex-col gap-3 sm:flex-row">
        <div class="relative w-full">
          <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            €
          </span>

          <input
            id="salary"
            type="number"
            min="0"
            placeholder="Ejemplo: 1600"
            class="w-full rounded-2xl border border-white/10 bg-white/10 px-10 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
          />
        </div>

        <button
          id="calculate-button"
          class="rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-950/40 transition hover:scale-[1.02] hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Calcular
        </button>
      </div>

      <p id="form-error" class="mt-3 hidden text-sm font-medium text-red-300">
        Introduce un sueldo válido mayor que 0.
      </p>
    </section>
  `;
}
