import {DotLottieReact} from "@lottiefiles/dotlottie-react";

const BackgroundAnimation = ({className}) => {
	return (
		<div className={className}>
			<DotLottieReact
				src="https://lottie.host/af050028-04ba-4a89-bcb5-6b24b70551bf/81emOEaINL.lottie"
				loop
				autoplay
				speed={0.8}
			/>
		</div>
	);
};

export default BackgroundAnimation;