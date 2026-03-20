import {DotLottieReact} from "@lottiefiles/dotlottie-react";

const BackgroundAnimation = ({className}) => {
	return (
		<div className={className}>
			<DotLottieReact
				src="https://lottie.host/f8d14ed8-5472-4e71-9b07-f59334be63b0/zWnO5HuH93.lottie"
				loop
				autoplay
				layout={{
					fit: "cover",
					align: [0, 0],
				}}
				speed={1.1}
			/>
		</div>
	);
};

export default BackgroundAnimation;