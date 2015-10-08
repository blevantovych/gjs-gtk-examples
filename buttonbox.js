#!/usr/bin/env gjs

const Gtk = imports.gi.Gtk;

Gtk.init(null);

let window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL});
window.set_title("ButtonBox");
window.connect("destroy", Gtk.main_quit);

let buttonbox = new Gtk.ButtonBox();
buttonbox.set_spacing(5);
window.add(buttonbox);

let button = new Gtk.Button({label: "Button 1"});
buttonbox.add(button);
let button = new Gtk.Button({label: "Button 2"});
buttonbox.add(button);
let button = new Gtk.Button({label: "Button 3"});
buttonbox.add(button);
buttonbox.set_child_secondary(button, true);

window.show_all();

Gtk.main();
