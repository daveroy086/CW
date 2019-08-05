def update_light(current):
    return {'green': 'yellow', 'yellow': 'red','red': 'green'}.get(current)

    

update_light('green')# 'yellow')
#update_light('yellow')# 'red')
#update_light('red')# 'green')