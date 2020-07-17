import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import assets from './assets/luxury.jpg'

class News extends React.Component {

  state = {
    newsArr: [
      {
        avatar: 'R', header_title: 'Jewels', header_date: 'June 14, 2020',
        card_media_title: 'Green Luxury Gemstones', card_content_body: 'A disappointing earring, and the world’s hottest rock: zirconia of the world’s hottest rock',
        collaps_header: 'Jewels:', collaps_body: 'Zirconia is a mineral with a crystal structure made from the elements zirconium and oxygen. It looks pretty like diamond, but is only worth a fraction of the value.',
        collaps_sub_body: "Just last week, my partner handed me an earring that she had found in a park near her home more than seven years ago, and for which she’d had no luck finding the owner.The earring had a gold setting that gripped a very large, transparent, beautifully cut gemstone. Given that I am a geologist, she asked me to check it out for her to find out more about the stone. After all, we thought, if it was a diamond, then it could fund a holiday to somewhere lovely, given its large size. Hawaii, perhaps?",
        image: "https://miro.medium.com/max/696/1*CA9n7MOWKo3UrMDUx_wwVA.jpeg"
      },
      {
        avatar: 'D', header_title: 'Sports', header_date: 'June 12, 2020',
        card_media_title: "Djokovic's beachside home",
        card_content_body: "Djokovic's home sleek Miami Beach retreat nd for which she’d had no luck finding",
        collaps_header: 'Sports:', collaps_body: "He's been busy training and competing in Wimbledon 2019, but Novak Djokovic has an incredible home to return to once his busy summer is over ",
        collaps_sub_body: "Wimbledon champion's incredible £5.3m apartment in Florida has panoramic views of the Atlantic",
        image: "https://www.wallpapers13.com/wp-content/uploads/2017/09/Maldives-tropical-modern-luxury-villas-with-pools-4k-Ultra-hd-desktop-wallpaper-3840x2400-1920x1440.jpg"
      },
      {
        avatar: 'A', header_title: 'Animals', header_date: 'June 12, 2020',
        card_media_title: "KANGAROO SKIN AS WILDFIRES",
        card_content_body: "VERSACE puts an end to using kangaroo skin IN AUSTRALIA,o using kangaroo",
        collaps_header: 'Animals:', collaps_body: " half a billion animals and plants have now been killed, including an estimated 30,000 koalas",
        collaps_sub_body: "Animal rights group LAV had been putting pressure on the fashion house for several years, demanding that they stop using the animal skin altogether  Versace has now confirmed the ban, but did not publicise the news",
        image: "https://static.euronews.com/articles/stories/04/44/46/26/945x531_cmsv2_b6ed0b38-6e23-58df-851b-bed2fe7fdaf0-4444626.jpg"
      },
      {
        avatar: 'B', header_title: 'Beauty', header_date: 'June 10, 2020',
        card_media_title: "GISELE BÜNDCHEN",
        card_content_body: "GISELE BÜNDCHEN CASHES IN ON MENTAL HEALTH TO SELL £152 DIOR dining scene in ",
        collaps_header: 'Beauty:', collaps_body: "Drawing from her self-help, autobiographical debut book Lessons: My Path to a Meaningful Life (Avery, 2018) and fame as a fervent environmentalist, Brazilian supermodel Gisele Bündchen",
        image: "https://static.euronews.com/articles/stories/04/43/22/48/945x531_cmsv2_4ef6ce47-9c71-5f3d-bbe8-407b65c66e2c-4432248.jpg"
      },
      {
        avatar: 'B', header_title: 'OutDoor', header_date: 'June 9, 2020',
        card_media_title: "Out Door",
        card_content_body: "ou can see why Santa Claus chose to set up camp in the North Pole dining scene in ",
        collaps_header: 'OutDore:', collaps_body: "The world’s northern-most hotel is to open for one month in April 2020 in the North Pole. One Nordic travel company is making it possible to experience luxury in the middle",
        image: "https://static.euronews.com/articles/stories/04/32/31/24/945x531_cmsv2_1ab8f88b-dcc5-5405-a702-b521e70749df-4323124.jpg"
      },
      {
        avatar: 'O', header_title: 'Fashion', header_date: 'June 8, 2020',
        card_media_title: "Fashion world",
        card_content_body: "CONDÉ NAST IS FIRST TO SIGN UN FASHION PLEDGE FOR CLIMATE ACTION",
        collaps_header: 'OutDore:', collaps_body: "Condé Nast today unveils a new global sustainability initiative, as the first media outlet to sign the United Nation's Fashion Industry Charter for Climate Action.",
        image: "https://static.euronews.com/articles/stories/04/31/44/96/945x531_cmsv2_8365633f-b5a6-506d-ad13-28f8b9fcce21-4314496.jpg"
      },
      {
        avatar: 'I', header_title: 'countries', header_date: 'June 8, 2020',
        card_media_title: "world countries",
        card_content_body: "Introducing Dubai’s international dining scene in the Dubai UAE NAST IS FIRST",
        collaps_header: 'OutDore:', collaps_body: "There are people of more than 200 nationalities living in Dubai, and all have brought with them a taste of home. Many expats have opened their o",
        image: "https://static.euronews.com/articles/stories/04/32/26/22/1280x720_cmsv2_a5779bf6-1064-5b35-940c-4eb8786fadbf-4322622.jpg"
      },
      {
        avatar: 'D', header_title: 'Food', header_date: 'June 3, 2020',
        card_media_title: "Food",
        card_content_body: "DINE INSIDE A RE-ENACTMENT OF THE ORIENT EXPRESS laus chose to set international din",
        collaps_header: 'Food:', collaps_body: "Find the discrete Press for Champagne  built-in wall-button and a waiter dressed like a very elegant train steward will swiftly appear with a glass of bubbly to satisfy your thirst.",
        image: "https://static.euronews.com/articles/stories/04/16/99/86/945x531_cmsv2_f19ab8a9-7aaa-5332-affe-811d25e48fa8-4169986.jpg"
      },
      {
        avatar: 'R', header_title: 'Transport', header_date: 'June 2, 2020',
        card_media_title: "Transport",
        card_content_body: "WHAT DO PEOPLE DO ON THEIR SUPERYACHTS? WATCH NETFLIX, IT TURNS OUT What do",
        collaps_header: 'Food:', collaps_body: "Once every millennium (or so) journalists are invited to spend a day on a superyacht to really ‘experience’ it and write about how to charter. The stars must be aligned though, as a vast array of people",
        image: "https://static.euronews.com/articles/stories/04/15/21/12/945x531_cmsv2_2bdc1611-1c9a-51f1-bed3-8113a6ca5199-4152112.jpg"
      },
      {
        avatar: 'F', header_title: 'Fashion', header_date: 'June 1, 2020',
        card_media_title: "Fashion",
        card_content_body: "20 TOTALLY REALISTIC ECO-FASHION RULES TO LIVE BY  OF THE ORIENT EXPRESS",
        collaps_header: 'Fashion:', collaps_body: "Whether you're far into your sustainable fashion journey or you've landed on this page by mistake, you'll definitely find something valuable for you on this list. Easy and realistic - we won't tell you",
        image: "https://static.euronews.com/articles/stories/04/06/57/76/945x531_cmsv2_34472d01-2859-5108-8147-9fd7cb3047f7-4065776.jpg"
      }
    ],
    expanded: false,
    cardClicked: {},
    search_field: ''
  }

  handleExpandClick = (el) => {
    this.setState({
      expanded: !this.state.expanded,
      cardClicked: el
    })
  }

  searchHandler = (e) => {
    this.setState({
      search_field: e.target.value
    })
  }
  render() {
    const { expanded, newsArr, cardClicked, search_field } = this.state
    let filtered = newsArr.filter(
      (fil) => {
        return fil.header_title.toLowerCase().indexOf(search_field.toLowerCase()) !== -1;
      })
    return (
      <div className="col-xs-12" style={styles.container}>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={styles.search}>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ padding: "0px" }}>
            <img src={assets} alt="Girl in a jacket" width="500" height="600" style={{ maxHeight: "90px", objectFit: 'cover', width: '409px', borderRadius: '20px' }} />
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center', marginTop: "20px" }}>
            <form noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Search News" variant="outlined" style={styles.text_field} onChange={(event) => { this.searchHandler(event) }} />
            </form>
          </div>
        </div>
        <Grid container spacing={3}>
          {filtered.map((el, index) => {
            return (
              <div className="col-xs-3" style={styles.grid}>
                <Card style={styles.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" style={styles.avatar}>
                        {el.avatar}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={el.header_title}
                    subheader={el.header_date}
                  />
                  <CardMedia
                    style={styles.media}
                    image={el.image}
                    title={el.card_media_title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {el.card_content_body}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleExpandClick(el)}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  {cardClicked.collaps_body == el.collaps_body &&
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph>{el.collaps_header}</Typography>
                        <Typography paragraph>
                          {el.collaps_body}
                        </Typography>
                      </CardContent>
                    </Collapse>
                  }
                </Card>
              </div>
            )
          })}
        </Grid>
      </div>
    )
  }
}

const styles = {
  container: {
    margin: '0px',
  },
  text_field: {
    width: "60%"
  },
  search: {
    marginTop: "20px",
    padding: '0px'
  },
  grid: {
    padding: "20px 0px",
    paddingLeft: '10px',
    width: '19%'
  },
  card: {
    maxWidth: 345,

  },
  avatar: {
    backgroundColor: "#f00"
  },
  media: {
    height: 0,
    paddingTop: '56%'
  }
}

export default News;
