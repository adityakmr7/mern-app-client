import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function AppCard({
  title,
  content,
  updatedAt,
  createdAt,
  slug,
}) {
  return (
    <Card sx={{ minWidth: 275, marginY: "20px", marginX: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {content}
        </Typography>
        <Typography variant="body2">{slug}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
