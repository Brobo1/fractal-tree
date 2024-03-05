import {
	useRef,
	useEffect
} from 'react';

function FractalTree() {
	const canvasRef = useRef(null)
	
	const drawTree = canvas => {
		let ctx = canvas.getContext('2d')
		
		ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
		
		function draw(startX, startY, len, angle) {
			ctx.beginPath();
			ctx.save();
			
			ctx.strokeStyle = `rgb(
			${Math.min(160, 85 + len)},
			${Math.max(0, 190 - len)},
			0)`;
			ctx.lineWidth = len/10;
			ctx.translate(startX, startY);
			ctx.rotate(angle * Math.PI / 180);
			ctx.moveTo(0, 0);
			ctx.lineTo(0, -len);
			ctx.stroke();
			
			if (len < 10) {
				ctx.restore();
				return;
			}
			let num = 0.90 + Math.random() * (1.0 - 0.90);
			draw(0, -len, len * (0.85*num), angle + (5*num));
			draw(0, -len, len * (0.85*num), angle - (5*num));
			
			ctx.restore();
		}
		
		draw(300, 800, 120, 0);
	}
	
	useEffect(() => {
		const canvas = canvasRef.current;
		drawTree(canvas);
	}, [])
	
	return <canvas ref={canvasRef} width={600} height={800}/>
}

export default FractalTree;