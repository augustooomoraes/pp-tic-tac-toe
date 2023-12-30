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
- [x] pôr o Analytics
- [x] arrumar o light mode;
- [ ] botão de alternar entre dark/light mode;
- [ ] corrigir as animações do mostrador do jogador atual;
- [x] criar animações de hover e click nos links do rodapé;
- [x] criar animações de hover e click dos botões (na verdade, sem animações: somente as opacidades mudam);
- [ ] criar animações de alteração de texto (nos contadores de vitórias e empates);
- [ ] fazer o menu fechar quando se clica fora dele ou em algum botão;
- [ ] internacionalização (<https://www.youtube.com/watch?v=pZFHkigVdUU>, <https://nextjs.org/docs/pages/building-your-application/routing/internationalization>)
- [ ] corrigir o hydration error (quando se atualiza/abre a página sem que ela esteja no initialValue do localHost);

---
