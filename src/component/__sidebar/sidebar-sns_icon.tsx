import { useToggleStore } from "component/__header/toggle";


export const SidebarSnsIcon = () => {

    const light = useToggleStore((state: { light: boolean }) => state.light);

    return (
        <div className="sns-icon">

            {/* facebook */}
            <svg className="sidebar-sns" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 6.55556V15.4444C21 18.5127 18.5127 21 15.4444 21H6.55556C3.48731 21 1 18.5127 1 15.4444V6.55556C1 3.48731 3.48731 1 6.55556 1H15.4444C18.5127 1 21 3.48731 21 6.55556Z" stroke={light ? "#231EDC" : "#aff7d4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.88892 21.0001C9.88892 17.6668 9.88892 14.3334 9.88892 11.0001C9.88892 8.56955 10.4445 6.55566 14.3334 6.55566" stroke={light ? "#231EDC" : "#aff7d4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.66663 12.1111H9.88885H14.3333" stroke={light ? "#231EDC" : "#aff7d4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* twitter */}
            <svg className="sidebar-sns" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 1.00914C21 1.00914 19.1655 2.09288 18.1455 2.40005C17.5979 1.77052 16.8703 1.32432 16.0609 1.1218C15.2515 0.91929 14.3995 0.970226 13.6201 1.26774C12.8406 1.56524 12.1713 2.09496 11.7027 2.78524C11.2341 3.47554 10.9888 4.29308 11 5.12733V6.03642C9.40236 6.07784 7.81934 5.72352 6.39183 5.005C4.96431 4.28648 3.73665 3.22608 2.81818 1.91824C2.81818 1.91824 -0.818182 10.1001 7.36364 13.7365C5.49139 15.0073 3.26105 15.6445 1 15.5546C9.18182 20.1001 19.1818 15.5546 19.1818 5.10005C19.181 4.84683 19.1566 4.59423 19.1091 4.34551C20.0369 3.4305 21 1.00914 21 1.00914Z" stroke={light ? "#231EDC" : "#aff7d4"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* blog */}
            <svg className="sidebar-sns" width="35" height="10" viewBox="0 0 35 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.078125 0.433594H2.74414C3.88477 0.433594 4.74805 0.59375 5.33398 0.914062C5.91992 1.23438 6.21289 1.79688 6.21289 2.60156C6.21289 2.92578 6.16016 3.21875 6.05469 3.48047C5.95312 3.74219 5.80469 3.95703 5.60938 4.125C5.41406 4.29297 5.17578 4.40234 4.89453 4.45312V4.51172C5.17969 4.57031 5.4375 4.67188 5.66797 4.81641C5.89844 4.95703 6.08203 5.16406 6.21875 5.4375C6.35938 5.70703 6.42969 6.06641 6.42969 6.51562C6.42969 7.03516 6.30273 7.48047 6.04883 7.85156C5.79492 8.22266 5.43164 8.50781 4.95898 8.70703C4.49023 8.90234 3.93164 9 3.2832 9H0.078125V0.433594ZM1.89453 3.82617H2.94922C3.47656 3.82617 3.8418 3.74414 4.04492 3.58008C4.24805 3.41211 4.34961 3.16602 4.34961 2.8418C4.34961 2.51367 4.22852 2.2793 3.98633 2.13867C3.74805 1.99414 3.36914 1.92188 2.84961 1.92188H1.89453V3.82617ZM1.89453 5.26758V7.5H3.07812C3.625 7.5 4.00586 7.39453 4.2207 7.18359C4.43555 6.97266 4.54297 6.68945 4.54297 6.33398C4.54297 6.12305 4.49609 5.9375 4.40234 5.77734C4.30859 5.61719 4.15039 5.49219 3.92773 5.40234C3.70898 5.3125 3.40625 5.26758 3.01953 5.26758H1.89453ZM9.34062 9V0.433594H11.157V7.5H14.6316V9H9.34062ZM25.1012 4.70508C25.1012 5.36523 25.0191 5.9668 24.8551 6.50977C24.691 7.04883 24.441 7.51367 24.1051 7.9043C23.773 8.29492 23.3512 8.5957 22.8395 8.80664C22.3277 9.01367 21.7223 9.11719 21.023 9.11719C20.3238 9.11719 19.7184 9.01367 19.2066 8.80664C18.6949 8.5957 18.2711 8.29492 17.9352 7.9043C17.6031 7.51367 17.3551 7.04688 17.191 6.50391C17.027 5.96094 16.9449 5.35742 16.9449 4.69336C16.9449 3.80664 17.0895 3.03516 17.3785 2.37891C17.6715 1.71875 18.1207 1.20703 18.7262 0.84375C19.3316 0.480469 20.1012 0.298828 21.0348 0.298828C21.9645 0.298828 22.7281 0.480469 23.3258 0.84375C23.9273 1.20703 24.3727 1.71875 24.6617 2.37891C24.9547 3.03906 25.1012 3.81445 25.1012 4.70508ZM18.8492 4.70508C18.8492 5.30273 18.9234 5.81836 19.0719 6.25195C19.2242 6.68164 19.4605 7.01367 19.7809 7.24805C20.1012 7.47852 20.5152 7.59375 21.023 7.59375C21.5387 7.59375 21.9566 7.47852 22.277 7.24805C22.5973 7.01367 22.8297 6.68164 22.9742 6.25195C23.1227 5.81836 23.1969 5.30273 23.1969 4.70508C23.1969 3.80664 23.0289 3.09961 22.693 2.58398C22.357 2.06836 21.8043 1.81055 21.0348 1.81055C20.523 1.81055 20.1051 1.92773 19.7809 2.16211C19.4605 2.39258 19.2242 2.72461 19.0719 3.1582C18.9234 3.58789 18.8492 4.10352 18.8492 4.70508ZM31.3285 4.18945H34.727V8.63086C34.2777 8.7793 33.8109 8.89844 33.3266 8.98828C32.8422 9.07422 32.2934 9.11719 31.6801 9.11719C30.8285 9.11719 30.1059 8.94922 29.5121 8.61328C28.9184 8.27734 28.4672 7.78125 28.1586 7.125C27.85 6.46875 27.6957 5.66211 27.6957 4.70508C27.6957 3.80664 27.8676 3.0293 28.2113 2.37305C28.559 1.7168 29.0648 1.20898 29.7289 0.849609C30.3969 0.490234 31.2113 0.310547 32.1723 0.310547C32.6254 0.310547 33.0727 0.359375 33.5141 0.457031C33.9555 0.554688 34.3559 0.681641 34.7152 0.837891L34.1117 2.29102C33.85 2.1582 33.5512 2.04688 33.2152 1.95703C32.8793 1.86719 32.5277 1.82227 32.1605 1.82227C31.6332 1.82227 31.1742 1.94336 30.7836 2.18555C30.3969 2.42773 30.0961 2.76758 29.8813 3.20508C29.6703 3.63867 29.5648 4.15039 29.5648 4.74023C29.5648 5.29883 29.641 5.79492 29.7934 6.22852C29.9457 6.6582 30.1859 6.99609 30.5141 7.24219C30.8422 7.48438 31.2699 7.60547 31.7973 7.60547C32.0551 7.60547 32.2719 7.59375 32.4477 7.57031C32.6273 7.54297 32.7953 7.51562 32.9516 7.48828V5.70117H31.3285V4.18945Z" fill={light ? "#231EDC" : "#aff7d4"} />
            </svg>

        </div>
    );
} 