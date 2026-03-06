import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function TestBox() {
	return (
		<Card sx={{maxWidth: 345}}>
			<CardActionArea>
				<CardContent>
					<Typography variant="body1" sx={{color: "text.secondary"}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas tempus dolor et mattis commodo. Vestibulum ut
						nibh nec isus consectetur eleifend. Cras arcu massa,
						vehicula id leo ut, bibendum ultricies assa. Phasellus
						dictum massa velit, in acilisis magna accumsan a. Donec
						ut commodo risus. Praesent a massa iaculis, consectetur
						enim vitae, efficitur est. Nullam interdum, lacus ac
						luctus dapibus, est dui facilisis velit, a vulputate iam
						felis ac nibh. Curabitur ullamcorper, ipsum sit amet
						facilisis blandit, ex sapien bibendum sapien, nec semper
						elit urna vel lectus. Duis vitae lacus quis velit
						interdum hendrerit non vel odio.
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default TestBox;