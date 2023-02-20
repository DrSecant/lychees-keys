const { Grid, Item, Box, Card, CardContent, Typography, Divider, Slide } = window['MaterialUI'];

const Contact = () => (
  <div class="contact-wrapper">
    <Grid container direction="column">
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ width: '40%' }}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Card id="aboutCard" className="info-card">
              <CardContent>
                <Typography className="card-title" sx={{ ml: 2, mb: 2 }} variant="h5" component="div">
                  About Anthony
                </Typography>
                <Divider className="card-divider" variant="middle" />
                <Box className="card-content" sx={{ m: 2, mb: 0 }}>
                  <Typography sx={{ mb: 1 }} variant="body1">
                  Anthony Pellegrino is a 2D Animator and Character Artist from Long Island, NY.
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant="body1">
                  His journey began with a myriad of cartoon influences that opened his eyes to the freedom of animation. 
                  From there he continued sharpening his skills through traditional art studies,  as well as, practicing story craft.
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant="body1">
                  His college career began with a brief stint as an architecture major before realizing his true dream 
                  to inspire the next generation the way he was inspired in his youth. 
                  </Typography>
                  <Typography variant="body1">
                  Transferring to 2D Animation he began working hard putting his skills to the test learning digital art. 
                  Tapping into the creative skills he's built his whole life he now crafts work that blossoms from the intricate 
                  weave of character and plot.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Slide>
        </Box>
      </Grid>
    </Grid>
  </div>
);