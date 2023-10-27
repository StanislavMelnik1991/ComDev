import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    width={104}
    height={109}
    viewBox="0 0 104 109"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.8108 46.6007C31.6545 45.3558 28.9979 45.3558 26.8416 46.6007L10.8079 55.8577C8.65167 57.1026 7.32336 59.4034 7.32336 61.8932V80.4073C7.32336 82.8971 8.65167 85.1978 10.8079 86.4428L26.8416 95.6998C28.9979 96.9447 31.6545 96.9447 33.8108 95.6998L49.8445 86.4428C52.0007 85.1978 53.329 82.8971 53.329 80.4073V61.8932C53.329 59.4034 52.0007 57.1026 49.8445 55.8577L33.8108 46.6007ZM55.6702 60.5415C55.6702 58.0517 54.3419 55.751 52.1856 54.506L33.8108 43.8973C31.6545 42.6524 28.9979 42.6524 26.8416 43.8973L8.46676 54.506C6.31049 55.751 4.98218 58.0517 4.98218 60.5415V81.759C4.98218 84.2488 6.31049 86.5495 8.46676 87.7944L26.8416 98.4032C28.9979 99.6481 31.6545 99.6481 33.8108 98.4032L52.1856 87.7944C54.3419 86.5495 55.6702 84.2488 55.6702 81.759V60.5415Z"
      fill="#FA3AFE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M82.1405 46.5886C79.9842 45.3437 77.3276 45.3437 75.1713 46.5886L59.1377 55.8456C56.9814 57.0906 55.6531 59.3913 55.6531 61.8811V80.3952C55.6531 82.885 56.9814 85.1857 59.1376 86.4307L75.1713 95.6877C77.3276 96.9326 79.9842 96.9326 82.1405 95.6877L98.1742 86.4307C100.33 85.1858 101.659 82.885 101.659 80.3952V61.8811C101.659 59.3913 100.33 57.0906 98.1742 55.8456L82.1405 46.5886ZM104 60.5294C104 58.0396 102.672 55.7389 100.515 54.494L82.1405 43.8852C79.9842 42.6403 77.3276 42.6403 75.1713 43.8852L56.7965 54.494C54.6402 55.7389 53.3119 58.0396 53.3119 60.5294V81.7469C53.3119 84.2367 54.6402 86.5374 56.7965 87.7824L75.1713 98.3911C77.3276 99.636 79.9842 99.636 82.1405 98.3911L100.515 87.7824C102.672 86.5374 104 84.2367 104 81.7469V60.5294Z"
      fill="#FA3AFE"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M57.9612 4.71518C55.8049 3.47026 53.1483 3.47026 50.992 4.71518L34.9583 13.9722C32.8021 15.2172 31.4737 17.5179 31.4737 20.0077V38.5218C31.4737 41.0116 32.8021 43.3123 34.9583 44.5573L50.992 53.8143C53.1483 55.0592 55.8049 55.0592 57.9612 53.8143L73.9948 44.5573C76.1511 43.3123 77.4794 41.0116 77.4794 38.5218V20.0077C77.4794 17.5179 76.1511 15.2172 73.9949 13.9722L57.9612 4.71518ZM79.8206 18.656C79.8206 16.1662 78.4923 13.8655 76.336 12.6206L57.9612 2.01182C55.8049 0.766902 53.1483 0.766901 50.992 2.01182L32.6171 12.6205C30.4609 13.8655 29.1326 16.1662 29.1326 18.656V39.8735C29.1326 42.3633 30.4609 44.664 32.6171 45.9089L50.992 56.5177C53.1483 57.7626 55.8049 57.7626 57.9612 56.5177L76.336 45.9089C78.4923 44.664 79.8206 42.3633 79.8206 39.8735V18.656Z"
      fill="#FA3AFE"
    />
    <path
      d="M28.8286 54.8979C26.6723 53.653 24.0157 53.653 21.8594 54.8979L8.89026 62.3857V59.6823L21.8594 52.1946C24.0157 50.9496 26.6723 50.9496 28.8286 52.1946L47.2035 62.8033C49.3597 64.0482 50.688 66.3489 50.688 68.8388V84.2708L48.3469 85.643V70.1904C48.3469 67.7006 47.0185 65.3999 44.8623 64.155L28.8286 54.8979ZM4.15554 62.4159L3.48458 62.8033C1.32832 64.0482 0 66.3489 0 68.8388V90.0562C0 92.5461 1.32831 94.8468 3.48458 96.0917L21.8594 106.7C24.0157 107.945 26.6723 107.945 28.8286 106.7L47.2035 96.0917C49.3597 94.8468 50.688 92.5461 50.688 90.0562V89.8092L48.3469 91.1716C48.3469 92.1348 47.833 93.0248 46.9989 93.5064L28.8286 103.997C26.6723 105.242 24.0157 105.242 21.8594 103.997L5.82576 94.74C3.66949 93.4951 2.34118 91.1944 2.34118 88.7045V68.2618C2.34118 66.9654 3.03281 65.7675 4.15554 65.1193V62.4159Z"
      fill="white"
    />
    <path
      d="M28.8286 54.8979C26.6723 53.653 24.0157 53.653 21.8594 54.8979L8.89026 62.3857V59.6823L21.8594 52.1946C24.0157 50.9496 26.6723 50.9496 28.8286 52.1946L47.2035 62.8033C49.3597 64.0482 50.688 66.3489 50.688 68.8388V84.2708L48.3469 85.643V70.1904C48.3469 67.7006 47.0185 65.3999 44.8623 64.155L28.8286 54.8979ZM4.15554 62.4159L3.48458 62.8033C1.32832 64.0482 0 66.3489 0 68.8388V90.0562C0 92.5461 1.32831 94.8468 3.48458 96.0917L21.8594 106.7C24.0157 107.945 26.6723 107.945 28.8286 106.7L47.2035 96.0917C49.3597 94.8468 50.688 92.5461 50.688 90.0562V89.8092L48.3469 91.1716C48.3469 92.1348 47.833 93.0248 46.9989 93.5064L28.8286 103.997C26.6723 105.242 24.0157 105.242 21.8594 103.997L5.82576 94.74C3.66949 93.4951 2.34118 91.1944 2.34118 88.7045V68.2618C2.34118 66.9654 3.03281 65.7675 4.15554 65.1193V62.4159Z"
      stroke="white"
    />
    <path
      d="M57.1037 62.4409L70.192 54.8844C72.3482 53.6395 75.0049 53.6395 77.1611 54.8844L93.1948 64.1414C95.3511 65.3863 96.6794 67.687 96.6794 70.1769V85.5601L99.0206 84.2099V68.8252C99.0206 66.3354 97.6922 64.0347 95.536 62.7897L77.1611 52.181C75.0049 50.9361 72.3482 50.9361 70.192 52.181L57.1037 59.7375V62.4409ZM96.6794 91.0031L99.0206 89.6167V90.0427C99.0206 92.5325 97.6922 94.8332 95.536 96.0781L77.1611 106.687C75.0049 107.932 72.3482 107.932 70.192 106.687L50.8292 95.5078C49.2842 94.6158 48.3325 92.9673 48.3325 91.1834L50.6737 89.8287C50.6737 91.6145 51.6264 93.2647 53.1729 94.1576L70.192 103.983C72.3482 105.228 75.0049 105.228 77.1611 103.983L95.1971 93.5704C96.1143 93.0408 96.6794 92.0622 96.6794 91.0031ZM50.6737 84.296V68.1712C50.6737 66.9225 51.3399 65.7686 52.4213 65.1443V62.4409L51.8171 62.7897C49.6608 64.0347 48.3325 66.3354 48.3325 68.8252V85.6582L50.6737 84.296Z"
      fill="white"
    />
    <path
      d="M57.1037 62.4409L70.192 54.8844C72.3482 53.6395 75.0049 53.6395 77.1611 54.8844L93.1948 64.1414C95.3511 65.3863 96.6794 67.687 96.6794 70.1769V85.5601L99.0206 84.2099V68.8252C99.0206 66.3354 97.6922 64.0347 95.536 62.7897L77.1611 52.181C75.0049 50.9361 72.3482 50.9361 70.192 52.181L57.1037 59.7375V62.4409ZM96.6794 91.0031L99.0206 89.6167V90.0427C99.0206 92.5325 97.6922 94.8332 95.536 96.0781L77.1611 106.687C75.0049 107.932 72.3482 107.932 70.192 106.687L50.8292 95.5078C49.2842 94.6158 48.3325 92.9673 48.3325 91.1834L50.6737 89.8287C50.6737 91.6145 51.6264 93.2647 53.1729 94.1576L70.192 103.983C72.3482 105.228 75.0049 105.228 77.1611 103.983L95.1971 93.5704C96.1143 93.0408 96.6794 92.0622 96.6794 91.0031ZM50.6737 84.296V68.1712C50.6737 66.9225 51.3399 65.7686 52.4213 65.1443V62.4409L51.8171 62.7897C49.6608 64.0347 48.3325 66.3354 48.3325 68.8252V85.6582L50.6737 84.296Z"
      stroke="white"
    />
    <path
      d="M52.9722 13.0113C50.8159 11.7664 48.1593 11.7664 46.003 13.0113L32.9514 20.5467V17.8433L46.003 10.308C48.1593 9.06305 50.8159 9.06305 52.9722 10.308L71.347 20.9167C73.5033 22.1616 74.8316 24.4623 74.8316 26.9522V42.2821L72.4904 43.6483V28.3038C72.4904 25.814 71.1621 23.5133 69.0058 22.2684L52.9722 13.0113ZM74.8316 47.9836L72.4904 49.3497C72.4904 50.2729 71.9979 51.1259 71.1984 51.5875L57.0851 59.7358V62.4392L71.347 54.2051C73.5033 52.9602 74.8316 50.6595 74.8316 48.1696V47.9836ZM52.4027 65.1426V62.4392C50.5988 63.4807 48.3763 63.4807 46.5724 62.4392L29.1057 52.3548C27.4838 51.4184 26.4847 49.6879 26.4847 47.8152L24.1436 49.1424C24.1436 51.0303 25.1507 52.7747 26.7857 53.7187L46.5724 65.1426C48.3763 66.184 50.5988 66.184 52.4027 65.1426ZM28.1438 23.3223C27.1172 23.9151 26.4847 25.0105 26.4847 26.1959V42.3734L24.1436 43.7196V26.9522C24.1436 24.4623 25.4719 22.1616 27.6281 20.9167L28.1438 20.619V23.3223Z"
      fill="white"
    />
    <path
      d="M52.9722 13.0113C50.8159 11.7664 48.1593 11.7664 46.003 13.0113L32.9514 20.5467V17.8433L46.003 10.308C48.1593 9.06305 50.8159 9.06305 52.9722 10.308L71.347 20.9167C73.5033 22.1616 74.8316 24.4623 74.8316 26.9522V42.2821L72.4904 43.6483V28.3038C72.4904 25.814 71.1621 23.5133 69.0058 22.2684L52.9722 13.0113ZM74.8316 47.9836L72.4904 49.3497C72.4904 50.2729 71.9979 51.1259 71.1984 51.5875L57.0851 59.7358V62.4392L71.347 54.2051C73.5033 52.9602 74.8316 50.6595 74.8316 48.1696V47.9836ZM52.4027 65.1426V62.4392C50.5988 63.4807 48.3763 63.4807 46.5724 62.4392L29.1057 52.3548C27.4838 51.4184 26.4847 49.6879 26.4847 47.8152L24.1436 49.1424C24.1436 51.0303 25.1507 52.7747 26.7857 53.7187L46.5724 65.1426C48.3763 66.184 50.5988 66.184 52.4027 65.1426ZM28.1438 23.3223C27.1172 23.9151 26.4847 25.0105 26.4847 26.1959V42.3734L24.1436 43.7196V26.9522C24.1436 24.4623 25.4719 22.1616 27.6281 20.9167L28.1438 20.619V23.3223Z"
      stroke="white"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export { Memo as RoyTeamLogo };
