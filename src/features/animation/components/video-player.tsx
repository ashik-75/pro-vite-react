import { useRef } from "react";

const VideoPlayer = () => {
	const ref = useRef(null);

	return (
		<div>
			<video
				ref={ref}
				width={500}
				height={500}
				src=""
				poster="https://source.unsplash.com/a-person-is-writing-on-a-piece-of-paper-ykgLX_CwtDw"
			>
				<source
					src="https://www.youtube.com/watch?v=kBhpMXwptCU"
					type="video/mp4"
				/>
			</video>

			<p>Hello man</p>
		</div>
	);
};

export default VideoPlayer;
