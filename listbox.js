#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ListBox");
window.connect("destroy", Gtk.main_quit);

let listbox = new Gtk.ListBox();
window.add(listbox);

for (var count = 1; count < 10; count++)
{
    let label = new Gtk.Label({label: "Label " + count});
    listbox.insert(label, count);
}

window.show_all();

Gtk.main();
