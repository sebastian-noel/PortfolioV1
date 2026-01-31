export default function About() {
  return (
    <section className="bg-background text-foreground py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">About me</h2>
          <div className="h-1 w-20 bg-accent rounded-full"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-(--color-text)/85">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="https://www.bny.com/corporate/global/en.html" className="text-accent underline decoration-accent underline-offset-2 focus:outline-none focus:ring-2 focus:ring-accent">BNY</a> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          
          <p>Program
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </section>
  );
}
