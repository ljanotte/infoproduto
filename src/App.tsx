import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import "./App.css";

function App() {
  const whatsapp = "554799740407";
  const waMsg = encodeURIComponent("Olá! Vim seu anuncio e quero saber mais.");
  const waLink = `https://wa.me/${whatsapp}?text=${waMsg}`;

  const checkoutLink = "https://www.hobby.inf.br";
  const instagramProfile = "https://www.instagram.com/hobby.informatica/";

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-6 text-center">
        <Badge className="mb-3">Oferta exclusiva do Instagram</Badge>
        <h1 className="font-bold text-3xl tracking-tight md:text-5xl">
          Transformando a gestão de pequenas empresas!
        </h1>
        <p className="mx-auto mt-3 max-w-2x1 text-shadow-blue-700">
          Soluções completas e inovadoras que simplificam a rotina do comércio,
          com automação eficiente para emissão de notas fiscais, controle de
          estoque e gestão financeira.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href={checkoutLink}>Nosso Website</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-green-500 hover:bg-green-400"
          >
            <a href={waLink} className="text-amber-50 hover:text-cyan-100">
              Falar WhatsApp
            </a>
          </Button>
        </div>

        <div
          className="relative mx-auto mt-8 aspect-video w-full max-w-3xl overflow-hidden rounded-xl 
        ring-1 ring-slate-200"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/vZZ99PtXs8Q?si=pwHdXijVpDcCgYb4&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <ul className="mt-4 flex flex-wrap justify-center gap-3 text-slate-500 text-sm">
          <li>Garantia de 7 dias</li>
          <li>•</li>
          <li>Pagamento seguro</li>
          <li>•</li>
          <li>Atendimento por WhatsApp</li>
        </ul>
      </section>

      <Separator className="mx-auto max-w-5xl" />

      <section className="mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-center font-semibold text-2xl md:text-3xl">
          Por que escolher a gente
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Resultado em dias</CardTitle>
              <CardDescription>Plano claro com metas semanais</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-600">
              Você vê progresso mensurável já na primeira semana.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suporte premium</CardTitle>
              <CardDescription>Canal direto no WhatsApp</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-600">
              Nada de fila. Resposta rápida e soluções práticas.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sem burocracia</CardTitle>
              <CardDescription>Onboarding em 10 minutos</CardDescription>
            </CardHeader>
            <CardContent className="text-slate-600">
              Assine, responda um formulário curto e comece imediatamente.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-6">
        <Card>
          <CardHeader>
            <CardTitle>O que clientes dizem</CardTitle>
            <CardDescription>
              Mais de 200+ atendimentos realizados
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <blockquote className="text-slate-700 text-sm">
              “Triplicamos os leads em duas semanas.”
              <span className="mt-2 block text-slate-500">— Ana</span>
            </blockquote>
            <blockquote className="text-slate-700 text-sm">
              “Excelente retorno sobre o investimento.”
              <span className="mt-2 block text-slate-500">— Lucas</span>
            </blockquote>
            <blockquote className="text-slate-700 text-sm">
              “Execução consistente e estratégia clara.”
              <span className="mt-2 block text-slate-500">— Beatriz</span>
            </blockquote>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Plano Start</CardTitle>
                <Badge variant="secondary">Mais popular</Badge>
              </div>
              <CardDescription>Perfeito para validar e escalar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• Estratégia personalizada</li>
                <li>• 2 sprints de implementação</li>
                <li>• Relatórios semanais</li>
                <li>• Suporte WhatsApp</li>
              </ul>
              <p className="mt-4 font-bold text-3xl">
                R$ 5000,00
                <span className="font-normal text-base text-slate-500">
                  {" "}
                  / único
                </span>
              </p>
            </CardContent>
            <CardFooter className="gap-3">
              <Button asChild className="w-full">
                <a href={checkoutLink}>Comprar agora</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Como funciona</CardTitle>
              <CardDescription>Rápido e sem fricção</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                <strong>1.</strong> Faça o pagamento e receba o link do
                onboarding.
              </p>
              <p>
                <strong>2.</strong> Preencha o formulário (10 minutos).
              </p>
              <p>
                <strong>3.</strong> Agende a call de kick-off.
              </p>
              <p>
                <strong>Prazo:</strong> primeiras entregas em até 7 dias úteis.
                <br />
                <br />
                <br />
              </p>
            </CardContent>
            <CardFooter className="gap-3">
              <Button
                asChild
                variant="secondary"
                className="w-full bg-pink-600 text-amber-50"
              >
                <a href={instagramProfile}>Ver mais no Instagram</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
