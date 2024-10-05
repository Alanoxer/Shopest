import Link from "next/link"

const Footer = () =>{
    return (<>
    <footer className="bg-indigo-600  mx-auto px-8 relative bottom-0 w-full mt-80">
    

        <div className=" flex flex-col md:flex-row py-6">

            <div className="flex-1 mb-6 text-black">
                <Link className=" no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 1024 1024"
                className="mr-4"
                aria-label="Marketplace Logo"
              >
                <defs>
                  <linearGradient id="gradient_0" gradientUnits="userSpaceOnUse" x1="394.91605" y1="354.1348" x2="372.26746" y2="395.7373">
                    <stop offset="0" stopColor="#2992D8"/>
                    <stop offset="1" stopColor="#30A9D9"/>
                  </linearGradient>
                </defs>
                <path fill="url(#gradient_0)" d="M764.408 701.176C820.058 695.018 838.978 789.246 772.126 798.476C709.024 801.772 697.644 710.474 764.408 701.176ZM761.736 731.078C740.566 738.474 744.332 775.17 772.126 769.288C794.014 758.416 787.07 728.434 761.736 731.078Z"/>
                <path fill="#2D84AF" d="M612.342 656.544L757.436 656.496C763.294 656.488 769.664 655.964 775.446 656.736C792.05 658.954 793.332 683.272 776.544 686.14C771.052 687.078 764.8 686.562 759.226 686.566L616.362 686.552C611.084 691.7 605.914 697.408 601.156 703.038C609.058 702.958 616.212 703.11 623.844 705.3C672.486 724.782 661.388 788.418 617.942 798.408C576.61 807.912 544.254 762.062 567.84 725.282C558.424 719.316 554.948 711.876 562.306 702.546C572.23 689.964 596.53 658.378 612.342 656.544ZM605.044 734.026C582.928 740.722 585.54 768.448 612.342 769.288C632.68 759.298 627.014 732.142 605.044 734.026Z"/>
                <path fill="#3861C1" d="M524.32 372.414C566.274 371.552 557.466 368.336 588.312 395.91L620.826 424.458L788.322 424.466C797.408 424.466 848.416 423.414 853.038 425.088C868.76 430.784 860.048 446.994 856.06 457.51L805.98 593.052C785.446 646.758 801.072 639.632 740.184 639.58L628.706 639.636C591.172 639.83 592.774 640.572 592.95 606.634L592.992 442.038C580.818 432.112 560.198 414.322 549.542 402.508C542.38 402.55 528.13 403.89 521.844 401.206C506.9 394.82 510.888 377.19 524.32 372.414ZM623.844 453.556C621.858 457.428 623.852 478.078 623.85 483.962L623.844 609.262L751.09 609.21C756.512 609.188 762.072 608.878 767.474 609.262C771.88 595.994 776.856 582.942 781.664 569.818C795.41 531.44 811.972 491.93 824.362 453.556L623.844 453.556Z"/>
                <path fill="#3861C1" d="M653.98 486.058L788.708 486.058C788.908 495.934 788.744 505.83 788.708 515.708C743.848 516.418 698.854 515.71 653.98 515.708L653.98 486.058Z"/>
                <path fill="#2D84AF" d="M175.1404 604.318L175.8592 604.498C187.4568 607.474 203.82 615.04 215.536 619.708L304.078 655.848C317.922 661.566 332.252 669.522 347.198 671.52C372.53 674.904 405.996 662.662 412.886 635.514C420.672 604.84 396.718 595.606 374.822 582.69C351.14 568.722 327.212 554.976 303.246 541.502L277.7 526.818C268.578 521.606 259.556 516.696 251.08 510.43C136.9786 426.078 186.4142 230.146 333.718 208.014C350.584 205.48 367.966 206.32 384.982 206.326L516.724 206.328C530.812 206.314 548.716 204.796 562.172 208.204C585.456 214.1 603.326 234.606 606.89 258.142C608.452 268.46 609.04 322.592 607.544 334.902C600.24 342.89 592.31 340.538 582.588 340.53L392.678 340.498C380.34 340.494 366.812 338.326 357.512 348.302C337.036 370.266 365.002 384.366 379.908 392.448C407.972 407.662 435.524 424.042 463.352 439.702C528.32 476.26 564.588 508.75 573.19 590.474C584.844 701.184 510.642 785.282 401.02 796.296C392.514 797.152 347.34 798.564 338.62 796.986C327.856 797.696 316.958 797.014 306.174 797.006L196.378 797.012C166.5076 797.024 160.7424 803.134 160.9678 769.828L160.9968 658.256L160.9302 631.842C160.9144 617.984 158.663 608.43 175.1404 604.318ZM191.6342 641.24C191.7248 644.234 191.7132 647.204 191.6342 650.2C192.3216 688.92 191.6224 727.786 191.6342 766.522C236.848 767.174 282.126 765.718 327.336 766.522C396.262 764.76 450.462 772.954 505.638 715.086C559.374 658.728 557.046 554.33 501.004 501.152C476.092 477.51 408.868 444.946 377.138 426.098C363.976 418.278 348.046 411.744 336.976 401.078C316.788 381.628 316.018 347.312 335.868 327.326C352.75 310.332 368.842 310.982 390.806 310.976L578.482 310.97C578.506 298.524 580.036 269.9 576.662 259.03C568.326 232.156 540.486 236.384 518.634 236.444L392.86 236.42C368.246 236.418 341.818 234.574 318.008 242.04C213.12 274.932 183.2984 424.892 269.268 486.854C282.964 496.724 298.902 503.912 313.622 512.158L379.736 549.942C403.742 563.766 432.364 576.112 441.364 604.862C460.344 665.492 396.236 711.73 339.872 701.054C325.08 698.252 311.834 691.87 298.048 686.15L254.194 667.998C233.406 659.316 211.508 651.83 191.6342 641.24Z"/>
                <path fill="#09C3AF" d="M160.9968 658.256C161.444 654.39 161.5618 650.572 161.627 646.682L162.2354 647.084L162.1534 646.18L161.6286 646.436C161.6824 637.864 162.122 661.862 162.1228 671.106L162.2594 735.548C162.3004 741.97 159.935 758.944 164.3208 762.736C164.505 762.684 177.455 755.372 179.6406 754.27L179.7408 754.552L180.3402 754.042L180.5974 754.162C182.1054 752.134 184.8754 750.982 188.7698 745.974C190.4546 747.616 190.6634 749.844 190.7616 752.064C191.1016 741.342 190.4592 646.744 191.2146 645.672L191.6342 650.2C192.3216 688.92 191.6224 727.786 191.6342 766.522C236.848 767.174 282.126 765.718 327.336 766.522C331.212 766.82 335.082 767.126 338.968 767.262C329.686 769.448 276.648 767.77 265.568 767.536C256.442 767.344 247.478 766.364 238.316 766.466C229.508 766.562 219.942 769.548 212.112 769.89L211.85 770.38L215.078 772.732L214.394 773.302L215.328 772.942L215.656 773.366L213.958 773.956C214.45 777.152 218.502 779.266 220.114 781.91C222.956 786.57 220.292 788.81 226.154 791.266L227.02 794.304L227.746 794.072L228.034 794.244C228.164 794.22 244.38 795.802 247.014 795.802L278.982 795.772C286.746 795.732 333.43 795.464 338.62 796.986C327.856 797.696 316.958 797.014 306.174 797.006L196.378 797.012C166.5076 797.024 160.7424 803.134 160.9678 769.828L160.9968 658.256Z"/>
              </svg>
                </Link>
            </div>


            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">FAQ</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Help</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Support</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Legal</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Terms</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Privacy</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Facebook</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="https://www.linkedin.com/in/alan-compay-30412a280/" className="no-underline  text-white hover:text-white">Linkedin</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Twitter</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-white md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Official Blog</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">About Us</Link>
                    </li>
                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                        <Link href="#" className="no-underline hover:underline text-white hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    


</footer>
    </>
    )
}

export default Footer