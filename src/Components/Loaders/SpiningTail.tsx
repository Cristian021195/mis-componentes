export const SpiningTail = (props:any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} {...props}>
        <defs>
            <linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
                <stop offset="0%" stopColor="#fff" stopOpacity={0} />
                <stop offset="63.146%" stopColor="#fff" stopOpacity={0.631} />
                <stop offset="100%" stopColor="#fff" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
            <path stroke="url(#a)" strokeWidth={2} d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate" />
            </path>
            <circle cx={36} cy={18} r={1} fill="#fff">
                <animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate" />
            </circle>
        </g>
    </svg>
  )
}
