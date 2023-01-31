const { Grid, Item, Box, Card, CardContent, Typography, Divider, Slide } = window['MaterialUI'];

const Home = () => (
  <div class="home-wrapper">
    <Grid container direction="column">
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ width: '50%' }}>
          <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Card id="aboutCard" className="info-card">
              <CardContent>
                <Typography className="card-title" sx={{ ml: 2, mb: 2 }} variant="h5" component="div">
                  About Anthony
                </Typography>
                <Divider className="card-divider" variant="middle" />
                <Box className="card-content" sx={{ m: 2, mb: 0 }}>
                  <Typography sx={{ mb: 2 }} variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin libero at dolor bibendum malesuada. Curabitur molestie pretium massa vel dictum. 
                    Nullam et dui urna. Pellentesque malesuada venenatis est et pharetra. Etiam sed sodales dolor. Praesent nec faucibus diam, quis imperdiet leo. Duis eleifend 
                    congue lectus, ac tincidunt lorem finibus quis. Vestibulum gravida lobortis sapien, ut finibus neque cursus sed.
                  </Typography>
                  <Typography variant="body1">
                    Integer posuere elit arcu, ut bibendum felis porttitor et. Nunc vitae lobortis erat, quis feugiat neque. Duis tempor vestibulum nulla id molestie. Integer 
                    varius ac ex at laoreet. Integer in nunc commodo, placerat lacus et, facilisis sem. Duis suscipit lobortis turpis, ac efficitur mauris. Integer tincidunt, velit 
                    vel malesuada gravida, ex purus aliquet felis, eget porttitor ex tellus a dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                    turpis egestas. Vestibulum et mi dignissim, commodo nulla vel, venenatis eros. 
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