#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

var window = new Gtk.Window();
window.set_title("LinkButton");
window.set_default_size(200, 200);
window.connect("destroy", Gtk.main_quit);

var linkbutton = new Gtk.LinkButton({label: "Programmica"});
linkbutton.set_uri("https://programmica.com/");
window.add(linkbutton);

window.show_all();

Gtk.main();
