## Portfolio project: Tic Tac Toe

This app was first made in **vanilla Javascript**. It was then refactored to **Typescript** and, after that, to **React**. This was all made following [**Zach Gollwitzer**'s video](https://www.youtube.com/watch?v=MsnQ5uepIaE) on **freeCodeCamp**'s YouTube channel.

I am once again refactoring it – to a **Next.js** app.

```
npx create-next-app@latest
- with TypeScript
- without ESLint
- with Tailwind CSS
- without `src/` directory
- with App Router
- without customizing the default import alias

npm i classnames
npm i react-icons
npm i lodash
npm i @types/lodash
```

---

You can access it from my:

- [**portfolio page**](https://www.augustooomoraes.com/); and from my
- [**github.io page**](https://augustooomoraes.github.io/).

Besides web projects, you can find on my **portfolio page** other kinds of works I've been doing:

- graphical design
- editorial design
- 3D modeling / sculpting / rendering / animation

---

### To do

- [x] refatorar;
- [x] publicar no repositório;
- [x] ver como fica a subrota dele no <https://augustooomoraes.github.io/>;
      → Só o .md.
      → Commit e5632c1:
  > repository page > settings > pages > build and deployment >
  > source: GitHub Actions >
  > suggestted workflow: Next.js >
  > default configuration
  > → Não funcionou. Workflow run:

```
Run npx --no-install next export
 ⨯
    The "next export" command has been removed in favor of "output: export" in next.config.js. Learn more: https://nextjs.org/docs/advanced-features/static-html-export

Error: Process completed with exit code 1.
```

→ Suponho que, alterando alguma coisa, daria para fazer funcionar, mas, ao menos agora, não tentarei isso. Usarei a publicação no Vercel (<https://pp-tic-tac-toe.vercel.app/>) para pôr no <https://www.augustooomoraes.com/web>.
→ Se for tentar novamente, link possivelmente útil: <https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site>

- [ ] pôr no <https://www.augustooomoraes.com/web>;
- [x] publicar no Vercel e ver se as OG e Twitter images estão funcionando; se estiverem, arrumar o código da página de portfólio;
      → Não funcionaram. Adicionarei os metadados (supostamente) necessários neste projeto, também.
- [ ] arrumar o light mode;
- [ ] botão de alternar entre dark/light mode;
- [ ] corrigir as animações do mostrador do jogador atual;
- [ ] criar animações de hover e click dos botões;
- [ ] fazer o menu fechar quando se clica fora dele ou em algum botão;
- [ ] internacionalização (<https://www.youtube.com/watch?v=pZFHkigVdUU>, <https://nextjs.org/docs/pages/building-your-application/routing/internationalization>)
- [ ] corrigir o hydration error (quando se atualiza/abre a página sem que ela esteja no initialValue do localHost);

---
