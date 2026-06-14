const DARK_TOKENS = {
  surface: "#343750",
  border: "#536878",
  headline: "#ffffff",
  subheading: "#e2e6ea",
  body: "#e2e6ea",
  annotation: "#778899",
  line: "#536878",
} as const;

const LIGHT_TOKENS = {
  surface: "#ffffff",
  border: "#e2e6ea",
  headline: "#536878",
  subheading: "#5A7C99",
  body: "#2B2D42",
  annotation: "#778899",
  line: "#e2e6ea",
} as const;

function AnnotationRow({
  label,
  lineColor,
  annotationColor,
  children,
  alignItems = "center",
}: {
  label: string;
  lineColor: string;
  annotationColor: string;
  children: React.ReactNode;
  alignItems?: "center" | "start";
}) {
  return (
    <div
      className={`sm:flex sm:gap-3 ${alignItems === "start" ? "sm:items-start" : "sm:items-center"}`}
    >
      <div
        className={`hidden sm:flex items-center gap-2 shrink-0 ${alignItems === "start" ? "mt-1" : ""}`}
      >
        <span
          className="font-heading text-[8px] font-bold tracking-wider leading-tight text-right min-w-[32px] uppercase"
          style={{ color: annotationColor }}
          dangerouslySetInnerHTML={{ __html: label }}
        />
        <div className="w-3 h-px" style={{ backgroundColor: lineColor }} />
      </div>
      <div className="sm:min-w-0 sm:flex-1">{children}</div>
    </div>
  );
}

export function DesignSpecimenCard({
  variant,
}: {
  variant: "dark" | "light";
}) {
  const t = variant === "dark" ? DARK_TOKENS : LIGHT_TOKENS;

  return (
    <div
      className="rounded-[6px] border relative"
      style={{ backgroundColor: t.surface, borderColor: t.border }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ backgroundColor: t.border }}
      />

      <div className="py-8 px-6 sm:pr-8 sm:pl-10">
        <p
          className="font-heading text-[11px] font-bold tracking-[0.1em] uppercase mb-8"
          style={{ color: t.annotation }}
        >
          {variant === "dark" ? "PORTFOLIO DARK" : "PORTFOLIO LIGHT"}
        </p>

        <div className="space-y-6">
          <AnnotationRow
            label="57 PT<br/>UPPERCASE"
            lineColor={t.line}
            annotationColor={t.annotation}
          >
            <h2
              className="font-heading text-4xl xl:text-[57px] font-bold leading-[1.1] uppercase"
              style={{ color: t.headline }}
            >
              LEAGUE SPARTAN
            </h2>
          </AnnotationRow>

          <AnnotationRow
            label="27 PT<br/>ITALIC"
            lineColor={t.line}
            annotationColor={t.annotation}
          >
            <p
              className="font-serif text-xl xl:text-[27px] italic leading-[1.3]"
              style={{ color: t.subheading }}
            >
              Libre Baskerville
            </p>
          </AnnotationRow>

          <AnnotationRow
            label="13 PT"
            lineColor={t.line}
            annotationColor={t.annotation}
            alignItems="start"
          >
            <p
              className="font-serif text-[13px] leading-[1.6]"
              style={{ color: t.body }}
            >
              Libre Baskerville. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
          </AnnotationRow>
        </div>

        <div className="flex justify-end mt-6">
          <span
            className="font-serif text-[10px] flex items-center gap-1.5 opacity-40"
            style={{ color: t.annotation }}
          >
            Made in
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded-full border text-[8px] font-heading font-bold"
              style={{ borderColor: t.annotation }}
            >
              SJ
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
