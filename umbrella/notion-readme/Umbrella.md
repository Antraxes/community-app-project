# Umbrella - An app for queer connection

Coding Four: App Development Studio

By Jackie Ryton 

Student ID: 24042461

## Introduction

My initial ideas for an app that benefits a community originally stemmed from conversations I have had with people in my own life - finding LGBTQIA+ friends outside of social events that involve drinking can be difficult. In my own experience there are a few reasons for this:

- A lot of queer culture originates from nightlife, and so it is where a lot of queer people go to experience their own culture. (McCormack and Measham, 2025)
- LGBTQIA+ venues such as bars and clubs are usually the most visible and established queer spaces in an area. If you do manage to meet another queer person outside of these spaces, usually their recommendation to meet other queer people is to go to these venues.
- Work schedules, disabilities, sensory issues, or caregiving responsibilities can make late-night events less accessible for some members of the community

From this, I wanted to create an app that allows queer people to connect to one another and plan events surrounding hobbies and interests outside of the nightlife culture. 

## Researching Queer Apps

My goal during this research period was to discover what apps already exist that fulfill a similar role for the community as mine would. After finding these apps, I would analyse them to see what they did well and what could be improved on. By doing so, I hoped to gain insight into user needs, user experience, and inform the direction and design of my own app. 

Some notes:

- Throughout research, I checked the colour contrast ratio of app elements for accessibility using a colour contrast ratio checker [here](https://coolors.co/contrast-checker/000000-48cf51). As stated on the linked website, this tool follows the Web Content Accessibility Guidelines (WCAG).
- The WCAG or Web Content Accessibility Guidelines (which can be found [here](https://www.w3.org/TR/WCAG22/)) provides a “wide range of recommendations for making web content more accessible” (W3C, 2024) and is the standard that the UK government themselves use (Heathcote, 2021). Whilst not everything recommended in the WCAG is applicable to mobile apps, it provides a useful baseline for designing apps with accessibility in mind.

I will also be using recommendations from:

- Android - [https://developer.android.com/guide/topics/ui/accessibility](https://developer.android.com/guide/topics/ui/accessibility)
- iOS - [https://developer.apple.com/design/human-interface-guidelines/accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)

And during development, I will be using react native APIs that help with making the app more accessible - [https://reactnative.dev/docs/accessibility](https://reactnative.dev/docs/accessibility)

#### First App - Lex

![IMG_2344.png](IMG_2344.png)

![IMG_2345.png](IMG_2345.png)

![IMG_2346.png](IMG_2346.png)

![IMG_2347.png](IMG_2347.png)

![IMG_2348.png](IMG_2348.png)

Initial Reactions

- I really enjoy the use of colours in this app, the black font on green or white background makes it much easier to read.

![image.png](image.png)

![image.png](image%201.png)

- The inclusion of a feed of posts people have made is nice, although it does make the app feel more like social media more akin to Instagram or Facebook
- I love the concept of creating and joining events made by other people
- The use of a map to show how far a user is from other people or events is interesting.

![IMG_2364.png](IMG_2364.png)

![IMG_2363.png](IMG_2363.png)

![IMG_2362.png](IMG_2362.png)

![IMG_2361.png](IMG_2361.png)

![IMG_2360.png](IMG_2360.png)

From looking at reviews, it is clear that there is a lot of varied feedback on Lex:

- People find it useful for finding other queer people and making queer friends
- Only being able to post 6 times a month felt restrictive to some
- Others felt this restriction is a money-grabbing tactic as you can purchase more posts using micro-transactions
- It is useful to some as a dating app, as they say they meet more interesting and unique people than compared to other apps specifically designed for dating
- Some felt the posting restrictions benefited the online space
- The ability to create events in an area helped people meet up in real life

### Second App - Collective

![IMG_2372.png](IMG_2372.png)

![IMG_2366.png](IMG_2366.png)

![IMG_2372.png](IMG_2372%201.png)

![IMG_2372.png](IMG_2372%202.png)

![IMG_2372.png](IMG_2372%203.png)

![IMG_2369.png](IMG_2369.png)

![IMG_2367.png](IMG_2367.png)

![IMG_2371.png](IMG_2371.png)

![IMG_2368.png](IMG_2368.png)

![IMG_2370.png](IMG_2370.png)

User reviews consistently suggest that the app’s recommendations on who users should follow and interact with are disproportionally gay men, which limits visibility for other queer identities within the community.

Reviewers also mention that it is harder to discover and connect with people from other queer groups because of this, stating that to do so they have to consistently not engage with recommended posts and accounts in order to receive more diverse content.

The UI is mostly just black text over a white background, which is a good contrast for accessibility needs. Some components use small, dark-grey text with a light-grey background, but this still conforms to the WCAG as seen below:

![image.png](image%202.png)

### Third App - HER

HER is a dating app designed specifically for the sapphic community. Sapphic is defined as trans women, cisgender women, and nonbinary people who are attracted to other sapphics. (DeVito et al., 2024) 

![IMG_2353.png](IMG_2353.png)

![IMG_2376.png](IMG_2376.png)

![IMG_2377.png](IMG_2377.png)

![IMG_2355.png](IMG_2355.png)

![IMG_2356.png](IMG_2356.png)

![IMG_2354.png](IMG_2354.png)

![IMG_2357.png](IMG_2357.png)

![IMG_2382.png](IMG_2382.png)

![IMG_2381.png](IMG_2381.png)

![IMG_2380.png](IMG_2380.png)

![IMG_2379.png](IMG_2379.png)

![IMG_2378.png](IMG_2378.png)

Quite a lot of the reviews I found were negative, and they tend to have similar reasons.

- People found the app to be quite buggy
- The premium service was too expensive, over £800 a year
- Despite being marketed as a sapphic app there are reports of many cisgender men being on the app and users are unable to filter them, even when they have the “anyone but cis men” option selected
- Some people enjoyed setting up their profile bio due to the stickers and prompts to help fill it out

The UI is mostly just black text over a white background, which is a good contrast for accessibility needs.

#### Conclusions from Research

From my research, I have discovered a few key things that I need to keep in mind when developing my app:

- To start, I will need to make sure that if I include any recommendations within the app, the algorithm must be inclusive and display a wide variety of different people to others.
- I will need to provide filters to my users to make sure that the content they receive is more tailored towards their wanted experience.
- The colour scheme for the app should have high enough contrast to meet accessibility standards.

#### Goals

My goals with Umbrella are as follows:

- Provide an online space where queer people of all identities can communicate and build meaningful relationships
- Use interactive maps and event posting to allow queer people to meet one another in real life through mutual interests and activities
- Allow customisation of filters to tailor the user’s experience more towards what they are interested in
- User are able to create profile which briefly describes them and their hobbies and interests

## The Queer Community

As mentioned previously throughout this document, the community that Umbrella will be designed for is the queer community, specifically individuals seeking to connect with other queer people without needing to participate in the local nightlife scene. 

Research suggests that a strong sense of belonging and connection to other LGBTQIA+ people can have a positive impact on wellbeing (Matsick et al., 2024). Community connectedness has been associated with improved health, greater self-acceptance, and increased feelings of validation and support (Lefevor et al., 2024). By providing users the opportunity to connect and potentially meet through shared interests and events, I aim to foster these connections in an accessible and inclusive environment.

## Development Process

To start with, I wanted to list out the main features/ideas I have for the app:

- Loading page which contains logo
- Login Screen/Create Account Screen
- Profile setup
- Profile
- Feed
- Map
- Events
- Filters
- Light/Dark Mode

#### User Personas

I created some user personas during the development phase as a way for me to have a better view on the diversity of people who may use this app, and what their needs might be. I used a collection pack called Avatars by Pablo Stanley (Stanley, n.d.) which I used within the Blush plugin in Figma.

![image.png](image%203.png)

Name: Aeris

Age: 28

Gender: Non-binary

Occupation: Mycologist

Interests: Hiking, Knitting, Foraging

Goals: Has recently moved to a new city for work and is looking for other queer people to enjoy hobbies with

Needs: A way to find and meet up with queer people with similar interests

![image.png](image%204.png)

Name: Georgina

Age: 19

Gender: Woman

Occupation: University Student

Interests: Music, Exercise, Biology

Goals: Wants to find other queer people to exercise with at her local gym

Needs: A platform where she can post an event that other queer people in the area can join

![image.png](image%205.png)

Name: Michael

Age: 45

Gender: Man

Occupation: Accounting

Interests: Cars, Spirituality

Goals: Has recently come out of the closet as a gay man and wants to meet people in the community for advice and connection

Needs: The ability to join events posted by other queer people 

![image.png](image%206.png)

![image.png](image%207.png)

For the logo, I download an SVG file of an umbrella from [https://icon-sets.iconify.design/?query=umbrella](https://icon-sets.iconify.design/?query=umbrella). License states that no attribution is required, commercial use is allowed

My initial sketches of the app include the loading screen, the login screen, and the account creation screen. I made these initial designs using Figma.

![image.png](image%208.png)

I was fine with these for a start, but I felt it would make more intuitive sense for me to go straight into wireframes and prototyping within Figma. This way, I could get the base design down whilst also being able to showcase intended user flow easier.

![image.png](image%209.png)

I also planned for what event posts will look like using figma. To start with, I came up with a quick design but I really disliked it 

![image.png](image%2010.png)

I instead opted to make the event card larger and more streamlined. 

![image.png](image%2011.png)

For the colour palette, I wanted to go for a pink theme whilst still following WCAG and so I used this generator [https://venngage.com/tools/accessible-color-palette-generator](https://venngage.com/tools/accessible-color-palette-generator)

![image.png](image%2012.png)

![image.png](image%2013.png)

*Light mode*

![image.png](image%2014.png)

*Dark mode*

![image.png](image%2015.png)

During development, I used both react native and expo to create the app.

This was my initial attempt at making a login screen. Whilst I like the colour schemes, it does still feel lacking in terms of polish. I will come back to styling once I’ve finished making all the initial pages I need.

References

W3C (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*. [online] www.w3.org. Available at: https://www.w3.org/TR/WCAG22/ [Accessed 8 Jun. 2026].

Heathcote, C. (2021). *Making great accessible mobile apps - Accessibility in government*. [online] accessibility.blog.gov.uk. Available at: https://accessibility.blog.gov.uk/2021/05/04/making-great-accessible-mobile-apps/ [Accessed 8 Jun. 2026].

DeVito, M.A., Feuston, J.L., Melder, E., Malloy, C., Ponder, C. and Brubaker, J.R. (2024). Safety and Community Context: Exploring a Transfeminist Approach to Sapphic Relationship Platforms. *Proceedings of the ACM on Human-Computer Interaction*, [online] 8(CSCW1), p.2. doi:https://doi.org/10.1145/3653694.

McCormack, M. and Measham, F. (2025). Building Back Queerer? Mainstreaming, Commodification, and Intersectional Inequalities in London’s Queer Nightlife Post-COVID-19. *The Sociological Quarterly*, [online] 66(4), pp.701–703. doi:https://doi.org/10.1080/00380253.2025.2483845.

Matsick, J.L., Sullivan, J.T., Todd, E., Kruk, M. and Cook, J.E. (2024). A social ecological approach to belonging in LGBTQ+ people. *Nature Reviews Psychology*, [online] 3(3), pp.3-5. doi:https://doi.org/10.1038/s44159-024-00280-6.

G Tyler Lefevor, Sorrell, S.A., Skidmore, S.J., Huynh, K.D., Golightly, R.M., Standifird, E., Searle, K. and Call, M. (2024). When connecting with LGBTQ+ communities helps and why it does: A meta-analysis of the relationship between connectedness and health-related outcomes. *Psychological Bulletin*, [online] 150(11), pp.1261–1286. doi:https://doi.org/10.1037/bul0000447.

Stanley, P. (n.d.). *Avatars*. Available at: https://blush.design/collections/rChdrB8vX8xQJunpDPp8/avatars [Accessed 9 Jun. 2026].