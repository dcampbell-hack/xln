export const ellipsis = (text, start=5, end=5 ):() => string => {
    const first = text.slice(0, start )
    const last = text.slice(text.length - end )

    return first.concat('...').concat(last)
}


export const charLimiter = (limit=0, text = "") => {
    return text.slice(0, limit)
}

export const removeSpace = (text = "") => {
    return text.replace(/\s/, '')
}