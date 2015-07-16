#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_font_button_font_set(fontbutton)
{
    print(fontbutton.get_font())
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("FontButton");
window.connect("destroy", Gtk.main_quit);

let fontbutton = new Gtk.FontButton();
fontbutton.connect("font-set", function() {on_font_button_font_set(fontbutton)});
window.add(fontbutton);

window.show_all();

Gtk.main();
