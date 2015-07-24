#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_color_button_clicked(colorbutton)
{
    let rgba = colorbutton.get_rgba();
    print("Red: " + rgba.red);
    print("Green: " + rgba.green);
    print("Blue: " + rgba.blue);
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_default_size(200, -1);
window.set_title("ColorButton");
window.connect("destroy", Gtk.main_quit);

let colorbutton = new Gtk.ColorButton();
colorbutton.set_use_alpha(true);
colorbutton.connect("color-set", function() {on_color_button_clicked(colorbutton)});
window.add(colorbutton);

window.show_all();

Gtk.main();
