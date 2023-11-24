A character string represents a city road.

Cars travel on the road obeying the traffic lights..

Legend:

. = Road
C = Car
G = GREEN traffic light
O = ORANGE traffic light
R = RED traffic light
Something like this:

C...R............G......
Rules
Simulation
At each iteration:

the lights change, according to the traffic light rules... then
the car moves, obeying the car rules
Traffic Light Rules
Traffic lights change colour as follows:

GREEN for 5 time units... then
ORANGE for 1 time unit... then
RED for 5 time units....
... and repeat the cycle
Car Rules
Cars travel left to right on the road, moving 1 character position per time unit

Cars can move freely until they come to a traffic light. Then:

if the light is GREEN they can move forward (temporarily occupying the same cell as the light)

if the light is ORANGE then they must stop (if they have already entered the intersection they can continue through)

if the light is RED the car must stop until the light turns GREEN again

Kata Task
Given the initial state of the road, return the states for all iterations of the simiulation.