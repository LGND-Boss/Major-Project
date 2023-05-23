import React from 'react'
import { Card, CardActionArea, CardActions ,CardMedia, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import './app.css'
const InfoCard = ({ firstName, lastName , role , email , imgUrl , brief }) => {
    const shoot = () => {
      alert("Great Shot!");
    }
  return (
    <div>
    <Badge badgeContent={role} color="primary">
       <Card sx={{ maxWidth: 330 }}>
      <CardActionArea>
      
        <CardMedia
          component="img"
          height="300"
          image={imgUrl}
          alt="Mentor Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name : {firstName} {lastName}.
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Email : {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {brief}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={shoot} size="small" color="primary">
          Visit
        </Button>
      </CardActions>
    </Card>
    <Box p={"2rem 0"} />
    </Badge>
    </div>
  )
}

export default InfoCard
