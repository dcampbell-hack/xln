export const ellipsis = (text, start=5, end=5 ) => {
    const first = text.slice(0, start )
    const last = text.slice(text.length - end )

    return first.concat('...').concat(last)
}


export const charLimiter = (limit=0, text = "") => {
    return text.slice(0, limit)
}