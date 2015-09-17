#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

function on_check_button_toggled()
{
    if (checkbutton.get_active())
        print("CheckButton toggled on");
    else
        print("CheckButton toggled off");
}

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("CheckButton");
window.connect("destroy", Gtk.main_quit);

let checkbutton = new Gtk.CheckButton({label: "CheckButton Example"});
checkbutton.connect("toggled", function() {on_check_button_toggled()})
window.add(checkbutton);

window.show_all();

Gtk.main();
