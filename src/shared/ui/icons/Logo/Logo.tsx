import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={141}
    height={51}
    viewBox={`0 0 141 51`}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#7A27C1"
      d="M139.964 23.552h-63C80.968 9.938 93.555 0 108.464 0c14.909 0 27.497 9.938 31.5 23.552Z"
    />
    <path
      fill="#000"
      d="M8.602 37.084c0 1.08.24 1.99.72 2.73.5.72 1.15 1.26 1.95 1.62.82.36 1.72.54 2.7.54 1 0 1.86-.13 2.58-.39a7.97 7.97 0 0 0 1.89-.96c.56-.4 1.06-.81 1.5-1.23v6.78c-.82.56-1.72 1.03-2.7 1.41-.96.4-2.21.6-3.75.6-1.82 0-3.48-.26-4.98-.78-1.5-.52-2.78-1.27-3.84-2.25s-1.88-2.15-2.46-3.51c-.58-1.36-.87-2.88-.87-4.56 0-1.68.29-3.2.87-4.56.58-1.36 1.4-2.53 2.46-3.51s2.34-1.73 3.84-2.25 3.16-.78 4.98-.78c1.54 0 2.79.19 3.75.57.98.38 1.88.86 2.7 1.44v6.78c-.44-.42-.94-.83-1.5-1.23-.54-.4-1.17-.72-1.89-.96-.72-.26-1.58-.39-2.58-.39-.98 0-1.88.18-2.7.54-.8.36-1.45.91-1.95 1.65-.48.72-.72 1.62-.72 2.7Zm20.878 0c0 1.02.19 1.92.57 2.7.38.78.92 1.39 1.62 1.83.7.42 1.54.63 2.52.63s1.82-.21 2.52-.63c.7-.44 1.24-1.05 1.62-1.83.38-.78.57-1.68.57-2.7 0-1.04-.18-1.94-.54-2.7-.36-.78-.89-1.38-1.59-1.8-.68-.44-1.54-.66-2.58-.66-.98 0-1.82.22-2.52.66-.7.42-1.24 1.02-1.62 1.8-.38.76-.57 1.66-.57 2.7Zm-6.99 0c0-1.68.3-3.2.9-4.56.6-1.36 1.43-2.53 2.49-3.51 1.06-.98 2.3-1.73 3.72-2.25 1.42-.52 2.95-.78 4.59-.78 1.68 0 3.23.26 4.65.78 1.42.52 2.66 1.27 3.72 2.25s1.88 2.15 2.46 3.51c.58 1.36.87 2.88.87 4.56 0 1.68-.29 3.22-.87 4.62-.56 1.38-1.36 2.58-2.4 3.6-1.04 1.02-2.28 1.8-3.72 2.34-1.42.56-2.99.84-4.71.84-1.72 0-3.3-.28-4.74-.84-1.42-.54-2.65-1.32-3.69-2.34a10.9 10.9 0 0 1-2.43-3.6c-.56-1.4-.84-2.94-.84-4.62Zm33.176 1.92-1.08 8.58h-7.05l3.9-22.05 9.3 11.34 9.3-11.34 3.9 22.05h-7.05l-1.08-8.58-5.07 6.63-5.07-6.63Zm21.133-12.42h6.87v21h-6.87v-21Zm8.25 21h-3.69v-5.7h3.39c.58 0 1.17-.05 1.77-.15.6-.1 1.15-.31 1.65-.63s.9-.8 1.2-1.44c.32-.64.48-1.5.48-2.58s-.16-1.94-.48-2.58c-.3-.64-.7-1.12-1.2-1.44-.5-.32-1.05-.53-1.65-.63-.6-.1-1.19-.15-1.77-.15h-3.39v-5.7h3.69c2.44 0 4.53.42 6.27 1.26 1.76.84 3.1 2.04 4.02 3.6.94 1.56 1.41 3.44 1.41 5.64 0 2.18-.47 4.06-1.41 5.64-.92 1.56-2.26 2.76-4.02 3.6-1.74.84-3.83 1.26-6.27 1.26Zm19.099 0v-5.25h10.59v5.25h-10.59Zm0-15.75v-5.25h10.59v5.25h-10.59Zm0 7.5v-5.1h9.99v5.1h-9.99Zm-4.56-12.75h6.3v21h-6.3v-21Zm28.493 10.26 4.05-10.26h7.8l-11.85 22.5-11.85-22.5h7.8l4.05 10.26Z"
    />
    <path
      fill="#E8E8EC"
      d="M92.765 15.781v-1.43h3.894a4.93 4.93 0 0 1-.187 1.727 4.051 4.051 0 0 1-.748 1.42c-.338.41-.76.733-1.265.967-.506.228-1.085.341-1.738.341-.616 0-1.18-.095-1.694-.286a3.947 3.947 0 0 1-1.331-.835 3.989 3.989 0 0 1-.88-1.298 4.408 4.408 0 0 1-.308-1.673c0-.608.106-1.158.319-1.65.213-.498.513-.924.902-1.275a4.116 4.116 0 0 1 1.364-.814 4.889 4.889 0 0 1 1.694-.287c.542 0 1.03.077 1.463.231.433.154.814.37 1.144.65.337.27.627.586.869.945l-1.65.859a2.212 2.212 0 0 0-.715-.76c-.293-.205-.664-.307-1.111-.307-.425 0-.818.095-1.177.286-.352.19-.635.465-.847.824-.206.352-.308.785-.308 1.298 0 .506.099.947.297 1.32.205.367.48.653.825.858.352.198.755.297 1.21.297.278 0 .531-.032.759-.099a1.9 1.9 0 0 0 .583-.296c.161-.133.297-.283.407-.451.117-.177.209-.364.275-.562h-2.046Zm7.287-.704h1.925l2.409 3.487h-2.178l-2.156-3.486Zm-1.925-4.213h1.859v7.7h-1.86v-7.7Zm1.166 1.573v-1.572h1.639c.66 0 1.21.106 1.65.319.44.212.773.51 1.001.89.227.374.341.81.341 1.31 0 .49-.114.927-.341 1.309a2.315 2.315 0 0 1-1.001.88c-.44.212-.99.319-1.65.319h-1.64V14.45h1.508c.249 0 .462-.037.638-.11a.933.933 0 0 0 .418-.341c.095-.155.143-.338.143-.55a.97.97 0 0 0-.143-.54.908.908 0 0 0-.418-.351 1.524 1.524 0 0 0-.638-.121h-1.507Zm7.705 2.277c0 .455.088.858.264 1.21.183.345.436.617.759.814.33.198.715.297 1.155.297.433 0 .81-.099 1.133-.297.33-.197.583-.469.759-.813.183-.353.275-.756.275-1.21 0-.455-.088-.855-.264-1.2a1.986 1.986 0 0 0-.748-.825c-.323-.197-.708-.296-1.155-.296-.44 0-.825.098-1.155.296a2.06 2.06 0 0 0-.759.825c-.176.345-.264.745-.264 1.2Zm-1.969 0c0-.594.103-1.136.308-1.628a3.83 3.83 0 0 1 2.2-2.101 4.457 4.457 0 0 1 1.639-.297c.594 0 1.14.1 1.639.297.506.191.946.466 1.32.825.374.36.664.785.869 1.276.205.492.308 1.034.308 1.628a4.27 4.27 0 0 1-.308 1.64 3.717 3.717 0 0 1-.858 1.297 3.908 3.908 0 0 1-1.309.858 4.521 4.521 0 0 1-1.661.297 4.55 4.55 0 0 1-1.672-.297 4.028 4.028 0 0 1-1.32-.858 3.92 3.92 0 0 1-.858-1.297 4.403 4.403 0 0 1-.297-1.64Zm9.639-3.85h1.859v5.038c0 .39.103.705.308.947.205.241.513.363.924.363.418 0 .73-.122.935-.363.205-.242.308-.558.308-.947v-5.037h1.859v5.17c0 .483-.081.905-.242 1.264-.154.36-.374.657-.66.892a2.9 2.9 0 0 1-.99.517 4.021 4.021 0 0 1-1.21.176c-.433 0-.836-.06-1.21-.177a3.035 3.035 0 0 1-.99-.517 2.456 2.456 0 0 1-.66-.89c-.154-.36-.231-.782-.231-1.265v-5.17Zm7.988 0h1.859v7.7h-1.859v-7.7Zm1.166 1.53v-1.53h1.507c.653 0 1.199.103 1.639.308.447.198.785.484 1.012.858.227.375.341.825.341 1.354 0 .513-.114.96-.341 1.341-.227.375-.565.664-1.012.87-.44.197-.986.296-1.639.296h-1.507v-1.528h1.507c.374 0 .667-.085.88-.253.213-.17.319-.411.319-.726 0-.323-.106-.569-.319-.738-.213-.168-.506-.253-.88-.253h-1.507Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as Logo };
