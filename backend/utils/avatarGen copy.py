from PIL import Image, ImageDraw
import random

IMG_SIZE = 496
GRID_SIZE = 8
CELL_SIZE = IMG_SIZE / GRID_SIZE







PALETTE = [
    ((204, 75, 202), # rosa
    (51, 232, 123)), # menta
    
    ((186, 51, 41), # vermelho
    (53, 204, 93)), # verde
    
    ((232, 180, 67), # banana
    (123, 43, 204)), # roxo
    
    ((45, 163, 214), # azul
    (76, 76, 217)), # azul magenta
    
    ((56, 214, 201), # ciano
    (212, 44, 67)), # vermelho
    
    ((240, 222, 67), # amarelo
    (240, 222, 67)), # amarelo
]

BG_COLOR = (16, 16, 16)

img = Image.new("RGB", (IMG_SIZE // 2, IMG_SIZE), BG_COLOR)
draw = ImageDraw.Draw(img)

random_color = random.choice(PALETTE)
print(random_color)


for row in range(GRID_SIZE):
    if row not in (0, GRID_SIZE -1):      
        for col in range(GRID_SIZE // 2):
            if col is not 0:
                if random.random() > 0.7:
                    #color = tuple(x - random.randint(0, 30) for x in random_color)
                    color = random.choice(random_color)
                else:
                    color = BG_COLOR

                x0 = col * CELL_SIZE
                y0 = row * CELL_SIZE
                x1 = x0 + CELL_SIZE
                y1 = y0 + CELL_SIZE
        
        #if col not in range(1, GRID_SIZE) and row is 0:
                draw.rectangle([x0, y0, x1, y1], fill=color)

def merge(im1, im2):
    w = im1.size[0] + im2.size[0]
    h = max(im1.size[1], im2.size[1])
    im = Image.new("RGB", (w, h))

    im.paste(im1)
    im.paste(im2.transpose(Image.Transpose.FLIP_LEFT_RIGHT), (im1.size[0], 0))

    return im

img = merge(img, img)

img.save("avatar_base.jpg")