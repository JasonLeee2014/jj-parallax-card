###jj-parallax-card for Vue 

jj-parallax-card is a Vue component to mimic Apple-tv style card. You can modify its size, light effect, and add any other components in its background and foreground to create your own 3d-card(<u>yes youc could embed another parallax card into it</u>). And absolutely it can handle all events like a normal html element, like click and hover. And you can even make it acts completely like a 3d button.

**Thanks the implementation idea from** [codepen](https://codepen.io/electerious/pen/rroqdL)

####💕GIF:

![jj-parallax-card-demo](https://github.com/JasonLeee2014/jj-parallax-card/blob/master/jj-parallax-card-demo.gif?raw=true)

![demo](https://github.com/JasonLeee2014/jj-parallax-card/blob/master/jj-parallax-card-img-2.png?raw=true)

![demo](https://github.com/JasonLeee2014/jj-parallax-card/blob/master/jj-parallax-card-img-3.png?raw=true)

### How To Use

1. install jj-parallax-card via npm

   `npm i jj-parallax-card`

2. Import it into your vue component.

   ```javascript
   import JJParallaxCard from 'JJParallaxCard'
   ```

   ```javascript
   components: {
       'jj-parallax-card':JJParallaxCard,
     },
   ```

3. use it in your code

   ```html
   <jj-parallax-card></jj-parallax-card>
   ```

   after set the size of the jj-parallax-card, you could set some properties to do some customisation. Here are the properties and actions you can set

   | Property-name | Type    | Description                                                  |
   | ------------- | ------- | ------------------------------------------------------------ |
   | light-color   | String  | a hex string to set the light color, default value is white. **if you don't want to have a Reflective-light-layer, just set this property to 'transparent'** |
   | click-effect  | Boolean | Ture if the card can be clicked down. Set it to true when you want the parallax card acts like a button. Default value is **false** |

   | Action-name | Description                     |
   | ----------- | ------------------------------- |
   | click       | Trigged when clicked that card. |

   your code will be like this

   ```html
   <jj-parallax-card lightColor="white" :click-effect="true" style="float:left; width: 300px; height: 300px;" @click="click"></jj-parallax-card>
   ```

4. Use slot to set the background and foreground view of the parallax-card

   ![jj-parallax-card-img-1](https://github.com/JasonLeee2014/jj-parallax-card/blob/master/jj-parallax-card-img-1.png?raw=true)

   | Type                                                         | Sample                              |
   | ------------------------------------------------------------ | ----------------------------------- |
   | slot="front" //this slot will be inserted into the foreground | \<img slot="content" src="" alt=""> |
   | slot="content" //this slot will be inserted into the background | \<div slot="front"></div?           |

   and off course you can add any components into the slot. Including embedded jj-paralllax-card component like in the gif.

   Your code will be like this

   ```html
   <jj-parallax-card lightColor="white" style="float:left; width: 300px; height: 300px;" @click="click">
         <img slot="content" src="background.png" alt="">
         <div slot="front">
           <img style="width: 100px; height: 100px;" src="front.png" alt="">
         </div>
   </jj-parallax-card>
   ```

   ### Demo

   demo are in the 'demo' zip.

   Remember to `npm install`
