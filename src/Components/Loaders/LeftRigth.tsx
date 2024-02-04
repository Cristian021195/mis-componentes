export const LeftRigthCircle= (props:any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={70} display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 -1 1" {...props}>
      <circle cx={10} cy={10} r={10}>
        <animateTransform fill="freeze" attributeName="transform" begin="1s" calcMode="spline" dur="2s" from="0 0" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" repeatCount="indefinite" to="0 0" type="translate" values="0;50;0" />
      </circle>
    </svg>
  )
