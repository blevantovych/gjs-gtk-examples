#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title("ListBox");
window.connect("destroy", Gtk.main_quit);

var listbox = new Gtk.ListBox();
window.add(listbox);

for (var count = 1; count < 10; count++)
{
    var label = new Gtk.Label({label: "Label " + count});
    listbox.insert(label, count);
}

window.show_all();

Gtk.main();
