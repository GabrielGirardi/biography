declare module 'react-lottie-player' {
    import { FC } from 'react';

    interface LottiePlayerProps {
        animationData: any;
        play?: boolean;
        loop?: boolean;
        style?: React.CSSProperties;
    }

    const LottiePlayer: FC<LottiePlayerProps>;
    export default LottiePlayer;
}
