#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_switch_toggled(widget)
{
    if (widget.get_active())
        print("Switch toggled on")
    else
        print("Switch toggled off")
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("Switch");
window.connect("destroy", Gtk.main_quit);

let switch1 = new Gtk.Switch();
switch1.connect("notify::active", function() {on_switch_toggled(switch1)});
window.add(switch1);

window.show_all();

Gtk.main();
