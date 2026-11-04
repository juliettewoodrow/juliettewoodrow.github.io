// Displayed in human-readable "at / dot" form so the full address never
// appears as a contiguous "x@y.z" string anywhere in the source, the built
// bundle, or the rendered DOM. This is the strongest defense against scrapers,
// at the cost of the address not being a clickable mailto link.
const parts = ["jwoodrow", "at", "stanford", "dot", "edu"]

export const Email = ({ className }) => {
    return <span className={className}>{parts.join(" ")}</span>
}
