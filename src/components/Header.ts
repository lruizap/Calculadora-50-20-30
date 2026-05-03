export function Header(): string {
  return `
    <header class="mb-8 text-center">
      <div class="mb-5 flex justify-center">
        <img
          src="/logo-50-20-30.svg"
          alt="Logo Calculadora 50/20/30"
          class="h-20 w-20 rounded-3xl shadow-lg shadow-blue-950/40"
        />
      </div>

      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        Finanzas personales
      </p>

      <h1 class="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Calculadora 50/20/30
      </h1>

      <p class="mx-auto max-w-2xl text-base leading-7 text-slate-300">
        Introduce tu sueldo mensual y calcula una distribución sencilla:
        <span class="font-semibold text-blue-300">50% necesidades</span>,
        <span class="font-semibold text-cyan-300">20% ahorro e inversión</span>
        y
        <span class="font-semibold text-emerald-300">30% ocio</span>.
      </p>
    </header>
  `;
}
